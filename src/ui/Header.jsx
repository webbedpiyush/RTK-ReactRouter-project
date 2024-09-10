import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 px-4 py-3 uppercase border-b border-stone-300 sm:px-6">
      <Link to="/" className="tracking-widest">
        Tasty pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
