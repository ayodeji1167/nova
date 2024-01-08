/* eslint-disable @next/next/no-img-element */

import { FeaturesCard } from '@/src/types/features-item';

export default function Page7Item({
  title,
  description,
  icon,
  index,
}: FeaturesCard) {
  return (
    <div className="p7-feat-card">
      <div className="p7-fc-cont">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div>
          <div className="p7-fc-img">
            <img width={'100%'} height={'100%'} src={icon} alt="ddd" />
          </div>
          <p style={{ color: 'gray' }}>{index}</p>
        </div>
      </div>
    </div>
  );
}
