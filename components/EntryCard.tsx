const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="divide-y dividy-gray-200 overflow-hidden bg-white shadow rounded-lg">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{entry.analysis?.summary || 'text'}</div>
      <div className="px-4 py-4">{entry.analysis?.mood || 'text'} </div>
    </div>
  );
};

export default EntryCard;
