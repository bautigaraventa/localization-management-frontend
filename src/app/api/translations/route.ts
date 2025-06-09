import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const projectId = searchParams.get("projectId");
    const locale = searchParams.get("locale") ?? "en";

    let url = `${process.env.API_URL}/localizations/${locale}`;
    
    if (projectId && projectId !== 'all') {
        url = `${process.env.API_URL}/localizations/${projectId}/${locale}`;
    }

    const res = await fetch(url, {
        cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream API failed" }, { status: res.status });
    }

    const data = await res.json();
    
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Proxy error", details: err }, { status: 500 });
  }
}