import Editor from '@/components/Editor';
import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';
const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });
  return entry;
};
const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  const analysisData = [
    {
      name: 'Summary',
      value: '',
    },
    {
      name: 'Subject',
      value: '',
    },
    {
      name: 'Mood',
      value: '',
    },
    {
      name: 'Negative',
      value: 'False',
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/5">
        <div className="bg-blue-300 px-6 py-10">
          <h2>Hello</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((e) => {
              return (
                <li
                  key={e.name}
                  className="px-2 py-4 flex items-center justify-between border-b border-t border-black/20"
                >
                  <span className="text-lg font-semibold">{e.name}</span>
                  <span>{e.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
