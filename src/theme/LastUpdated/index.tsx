import React from "react";
import type { Props } from "@theme/LastUpdated";
import { formatJalaliDate } from "@site/src/utils/jalali";

export default function LastUpdated({ lastUpdatedAt, lastUpdatedBy }: Props) {
  if (!lastUpdatedAt) {
    return <></>;
  }

  const jalaliDate = formatJalaliDate(lastUpdatedAt);

  return (
    <div className="theme-last-updated margin-top--sm" dir="rtl">
      <em className="text-slate-500 text-sm">
        آخرین به‌روزرسانی:{" "}
        <time dateTime={new Date(lastUpdatedAt * 1000).toISOString()}>
          {jalaliDate}
        </time>
        {lastUpdatedBy && (
          <>
            {" "}
            توسط <b className="text-green-700">{lastUpdatedBy}</b>
          </>
        )}
      </em>
    </div>
  );
}
