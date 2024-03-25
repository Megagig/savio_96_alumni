export const metadata = {
  title: 'Savio 96 Alumni Association',
  description: 'Track online payment of association dues',
};

export default function MembersLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
      <div className="flex flex-wrap p-2 justify-center">{children}</div>
    </div>
  );
}
