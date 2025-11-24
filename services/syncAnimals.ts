import { getDb } from '../db';
import { animals } from '../db/schema';
import { getAnimalDataFromSheets } from './googleSheets';

export async function syncAnimalsFromSheets(env: any) {
  try {
    console.log('Starting animal data sync...');
    
    const sheetData = await getAnimalDataFromSheets();
    console.log(`Found ${sheetData.length} animals in Google Sheets`);
    
    const db = getDb(env);
    
    await db.delete(animals);
    console.log('Cleared existing animal data');
    
    for (const row of sheetData) {
      await db.insert(animals).values({
        id: row['공고번호'] || `animal-${Date.now()}-${Math.random()}`,
        desertionNo: row['공고번호'] || '',
        animalRegistrationNo: row['동물등록번호'] || '',
        breed: row['품종'] || '',
        gender: row['성별'] || '',
        color: row['색상'] || '',
        neutered: row['중성화'] || '',
        age: row['나이'] || '',
        weight: row['체중'] || '',
        rescueFeatures: row['구조시 특징'] || '',
        socialTraits: row['특징(사회성)'] || '',
        healthTraits: row['특징(건강)'] || '',
        healthCheck: row['건강검진'] || '',
        vaccination: row['접종상태'] || '',
        location: row['발생장소'] || '',
        receivedDate: row['접수일시'] || '',
        notes: row['기타사항'] || '',
        jurisdiction: row['관할기관'] || '',
        status: row['상태'] || '',
        shelterName: row['보호센터'] || '',
        shelterLocation: row['보호장소'] || '',
        shelterContact: row['보호센터 연락처'] || '',
        adoptionProcess: row['입양절차'] || '',
        adoptionSupport: row['입양지원'] || '',
        volunteerInfo: row['봉사안내'] || '',
        eventInfo: row['행사안내'] || '',
        photo: row['Photo'] || '',
        updatedAt: new Date(),
      });
    }
    
    console.log(`Successfully synced ${sheetData.length} animals`);
    return { success: true, count: sheetData.length };
  } catch (error) {
    console.error('Error syncing animals:', error);
    throw error;
  }
}
