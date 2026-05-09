"""
snapshot_prices.py — 自选公司股价快照脚本

用法:
    pip install yfinance
    python scripts/snapshot_prices.py

输出:
    data/snapshots/YYYY-MM-DD.json
    包含每家公司的收盘价、市值、PE、52周高/低等关键指标。

由 Copilot CLI 在 "更新周报" 流程中调用，详见 AGENTS.md。
"""

from __future__ import annotations

import json
import sys
from datetime import datetime
from pathlib import Path

# 18 家首发公司的 Yahoo Finance ticker
# A 股 / 港股使用 .SS / .SZ / .HK 后缀
COMPANIES = [
    # 海外算力
    {"slug": "nvidia",  "name": "Nvidia",          "ticker": "NVDA"},
    {"slug": "amd",     "name": "AMD",             "ticker": "AMD"},
    {"slug": "broadcom","name": "Broadcom",        "ticker": "AVGO"},
    {"slug": "marvell", "name": "Marvell",         "ticker": "MRVL"},
    # 海外制造
    {"slug": "tsmc",    "name": "TSMC",            "ticker": "TSM"},
    {"slug": "intel",   "name": "Intel",           "ticker": "INTC"},
    {"slug": "samsung", "name": "Samsung",         "ticker": "005930.KS"},
    # 海外存储
    {"slug": "skhynix", "name": "SK Hynix",        "ticker": "000660.KS"},
    {"slug": "micron",  "name": "Micron",          "ticker": "MU"},
    # 海外设备
    {"slug": "asml",    "name": "ASML",            "ticker": "ASML"},
    {"slug": "amat",    "name": "Applied Materials","ticker": "AMAT"},
    {"slug": "lam",     "name": "Lam Research",    "ticker": "LRCX"},
    {"slug": "kla",     "name": "KLA",             "ticker": "KLAC"},
    {"slug": "tel",     "name": "Tokyo Electron",  "ticker": "8035.T"},
    # 中国制造 / 设备 / EDA
    {"slug": "smic",    "name": "中芯国际 SMIC",   "ticker": "0981.HK"},
    {"slug": "naura",   "name": "北方华创",        "ticker": "002371.SZ"},
    {"slug": "amec",    "name": "中微公司",        "ticker": "688012.SS"},
    {"slug": "empyrean","name": "华大九天",        "ticker": "301269.SZ"},
]


def fetch(ticker: str) -> dict:
    import yfinance as yf  # 延迟 import，方便没装 yfinance 时打印友好提示

    t = yf.Ticker(ticker)
    info = t.info or {}
    fast = getattr(t, "fast_info", None)

    def num(x):
        try:
            return float(x) if x is not None else None
        except (TypeError, ValueError):
            return None

    return {
        "ticker": ticker,
        "currency": info.get("currency"),
        "price": num(info.get("currentPrice") or (fast and fast.get("last_price"))),
        "previousClose": num(info.get("previousClose")),
        "marketCap": num(info.get("marketCap")),
        "trailingPE": num(info.get("trailingPE")),
        "forwardPE": num(info.get("forwardPE")),
        "fiftyTwoWeekHigh": num(info.get("fiftyTwoWeekHigh")),
        "fiftyTwoWeekLow": num(info.get("fiftyTwoWeekLow")),
        "longName": info.get("longName") or info.get("shortName"),
    }


def main() -> int:
    try:
        import yfinance  # noqa: F401
    except ImportError:
        print("ERROR: 请先安装 yfinance: pip install yfinance", file=sys.stderr)
        return 1

    today = datetime.utcnow().strftime("%Y-%m-%d")
    out_dir = Path(__file__).resolve().parent.parent / "data" / "snapshots"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{today}.json"

    rows = []
    for c in COMPANIES:
        try:
            data = fetch(c["ticker"])
            rows.append({**c, **data})
            print(f"  ✓ {c['slug']:10s} {c['ticker']:14s} "
                  f"price={data.get('price')} mcap={data.get('marketCap')}")
        except Exception as e:  # noqa: BLE001
            print(f"  ✗ {c['slug']:10s} {c['ticker']:14s} FAILED: {e}", file=sys.stderr)
            rows.append({**c, "error": str(e)})

    payload = {"date": today, "generatedAt": datetime.utcnow().isoformat(), "items": rows}
    out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n✓ 已写入 {out_path.relative_to(out_path.parent.parent.parent)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
