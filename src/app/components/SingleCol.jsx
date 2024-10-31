export default function SingleCol({ title, text }) {
  return (
    <div>
      <h3 className="text-4xl font-semibold text-[#00203FFF] pb-3">{title}</h3>
      <p className="text-[#00203fff]">{text}</p>
    </div>
  );
}

// className="px-10 sm:py-0 py-5 text-center md:w-1/3 w-full"
