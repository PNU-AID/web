import type { InputFormProps } from 'form';

function BioForm(data: InputFormProps) {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <label>{data.label}</label>
      <textarea
        className="w-[500px] h-[40vh] bg-white rounded-md text-black px-4 py-2 outline-none resize-none"
        maxLength={500}
        name={data.name}
        onBlur={data.onBlur}
        onChange={data.onChange}
        style={{
          outline: data.error ? '1px solid rgba(255, 0, 0, 0.8)' : 'none',
        }}
        value={data.value}
      />
      <div className="text-right text-gray-400">
        ({data.value.length}/500자)
      </div>
      {data.error && <p className="text-red-500">필수 입력 항목입니다.</p>}
    </div>
  );
}

export default BioForm;
