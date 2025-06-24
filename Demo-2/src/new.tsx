type val={
    count:number;
}
export default function Notifications({ count }:val) {
    return (
      <div>
        {count && <span>You have {count} notifications</span>}
      </div>
    );
  }
   