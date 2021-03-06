import React, { useRef, useState } from "react";
import "moment/locale/ko"; //한국어로 바꾸고 싶을 땐 ko, 일본어 ja
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

import { add, format, sub, differenceInHours } from "date-fns";
import { format as timezoneFormat, toDate } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";

// import "dayjs/locale/ko";
// dayjs.locale("ko");
// dayjs.extend(utc);
// dayjs.extend(timezone);

export default function DayjsExample() {
  const birthdayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const NewDateFnsDate2 = addWeeks(newDateFnsDate, 1);
  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(NewDateFnsDate2, "yyyy-MM-dd")}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZome: "America/New_York" }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {timezoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZome: "America/New_York" }
        )}
        {/* summertime때문에 두시간 밀림, 그래서 위에랑 값이 다름*/}
      </div>

      <br />
      <div>Leap year (korea)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
        {/* new 객체로 넣어줘야함 */}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        {/* 윤년이기 때문에 위에랑 값이 다름*/}
      </div>

      <br />
      <div>한국어로 표기 (07-17-2021을 2021년 7월 17일로 표기)</div>
      <div>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</div>

      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthdayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 2:00는 몇시간 차이인가?</div>
      <div>{`${differenceInHours(
        new Date("2021-07-17 03:00"),
        new Date("2021-07-18 2:00")
      )}시간`}</div>
    </div>
  );
}
