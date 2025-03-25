import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2"><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li className="mb-2"><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li className="mb-2"><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </div>
  );
};
export default Sidebar