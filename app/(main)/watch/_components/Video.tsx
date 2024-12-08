export default function Video() {
  return (
    <div className="w-full ">
      <iframe
        width="100%"
        height="508"
        src="https://www.youtube.com/embed/IhQ-tHSBQzg"
        title="اشتريت ستيم ديك وجربت أقوى الألعاب"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="mt-5 flex justify-between items-center ">
        <button className="w-[350px] p-3 font-bold text-sm text-white bg-[#0248AB] rounded-md max-md:w-40">
          Next
        </button>
        <button className="w-[350px] p-3 font-bold text-sm text-[#0248AB] border border-[#0248AB] rounded-md max-md:w-40">
          Back
        </button>
      </div>
    </div>
  );
}
