import { NextRequest, NextResponse } from 'next/server';
import { syncAnimalsFromSheets } from '../../../services/syncAnimals';

// Use nodejs runtime for Google Sheets API
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // For nodejs runtime, we need to pass a mock env
    // In production on Webflow Cloud, you'll trigger sync differently
    const result = await syncAnimalsFromSheets({ DB: null });
    return NextResponse.json({ 
      success: true, 
      message: `Synced ${result.count} animals`,
      count: result.count
    });
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
