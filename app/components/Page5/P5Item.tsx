import './Page5.css';
export default function P5Item({
  title,
  content,
}: {
  title: string;
  content: Map<string, string>;
}) {
  return (
    <div className="p5-item">
      <div className="p5-itm-title">
        <p>{title}</p>
      </div>

      <div>
        {Array.from(content.entries()).map(([key, value]) => (
          <div key={key}>
            <div className="p5-itm-line"></div>
            <div className="map-entry">
              <p>{key}</p>
              <p>{value}</p>
            </div>
          </div>
        ))}
        <div className="p5-itm-line"></div>
      </div>
    </div>
  );
}
