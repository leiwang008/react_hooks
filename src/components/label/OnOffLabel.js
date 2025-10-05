

function OnOffLabel({ isOn }) {
  return (
        <span
            className={`text-xs font-medium px-2 py-1 rounded-full 
            ${isOn ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
        >
            {isOn ? "On" : "Off"}
        </span>
  );
}

export default OnOffLabel;