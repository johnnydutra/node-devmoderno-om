import { formatDateRelativeToNow, formatDateTime } from '@/helpers/format-date-time';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time className='text-slate-600 text-sm/tight' dateTime={dateTime} title={formatDateRelativeToNow(dateTime)}>
      {formatDateTime(dateTime)}
    </time>
  );
}
