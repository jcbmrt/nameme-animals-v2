import Link from 'next/link';

export const runtime = 'edge';

export default async function AnimalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          입양 가능한 동물들 🐕🐈
        </h1>
        
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">시스템 준비 완료!</h2>
          <p className="text-gray-600 mb-4">
            데이터베이스가 설정되면 여기에 동물 목록이 표시됩니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="text-sm text-blue-800 font-medium mb-2">
              다음 단계:
            </p>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
              <li>GitHub에 푸시</li>
              <li>Webflow Cloud에 연결</li>
              <li>환경 변수 설정</li>
              <li>/api/sync-animals 호출하여 데이터 동기화</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
