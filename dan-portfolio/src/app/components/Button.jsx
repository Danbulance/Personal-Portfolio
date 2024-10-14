export default function Button({ text, hyperLink, target }) {
  return (
    <a href={hyperLink} target={target ? "_blank" : "_self"} class={`relative inline-block text-[#00203FFF] px-6 py-3 font-semibold border-2 border-[#00203FFF] rounded overflow-hidden group`}>
      <span class="relative z-10 transition-transform duration-300 ease-in-out group-hover:text-white">{text}</span>

      <span class="absolute inset-0 bg-[#00203FFF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </a>
  );
}
