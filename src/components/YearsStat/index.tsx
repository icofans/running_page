import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import { INFO_MESSAGE } from '@/utils/const';

const YearsStat = ({ year, onClick }: { year: string, onClick: (_year: string) => void }) => {
  const { years } = useActivities();
  // make sure the year click on front
  let yearsArrayUpdate = years.slice();
  yearsArrayUpdate.push('Total');
  yearsArrayUpdate = yearsArrayUpdate.filter((x) => x !== year);
  yearsArrayUpdate.unshift(year);

  // for short solution need to refactor
  return (
    <div className="w-full lg:w-full pb-16 pr-16 lg:pr-16">
      <section className="pb-0">
        <p style={{ lineHeight: 1.8}}>
          强风迎面吹拂，<br/>
          逆风奔跑前进，<br/>
          坚信答案就在前方，<br/>
          何为强大，<br/>
          何为奔跑，<br/>
          何为生存，<br/>
          一切都在风之彼方，<br/>
          希望就在我们各自的心中，<br/>
          看啊，<br/>
          道路就在我们的脚下，<br/>
          所以，<br/>
          我们要奔跑于今天，<br/>
          一直奔跑，<br/>
          直到永恒。<br/>
        </p>
        <p style={quoteStyle}>&ndash;&ndash;《强风吹拂》</p>
        <p className="leading-relaxed">
          {INFO_MESSAGE(years.length, year)}
          <br />
        </p>
      </section>
      <hr color="red" />
      {yearsArrayUpdate.map((year) => (
        <YearStat key={year} year={year} onClick={onClick} />
      ))}
      {// eslint-disable-next-line no-prototype-builtins
        yearsArrayUpdate.hasOwnProperty('Total') ? (
          <YearStat key="Total" year="Total" onClick={onClick} />
        ) : (
          <div />
        )}
    </div>
  );
};

const quoteStyle = {
  fontWeight:"bold",
  textAlign: "right"
};
export default YearsStat;
