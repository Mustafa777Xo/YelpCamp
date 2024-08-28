const BaseTextArea = ({
  placeholder,
  rows = 5,
}: {
  placeholder: string;
  rows: number;
}) => {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base lg:text-lg"
      placeholder={placeholder}
      rows={rows}
    />
  );
};

export default BaseTextArea;
