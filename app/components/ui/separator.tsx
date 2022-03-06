export default function Separator({ index }: { index: string }) {
  return (
    <div className="root-separator">
      <div className="column"></div>
      <div className="circle">{index}</div>
    </div>
  );
}
