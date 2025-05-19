import CustomStampFront from "./CustomStampFront";
import CustomStampBack from "./CustomStampBack";
export default function CustomContent() {
  return (
    <section className="w-full py-[36px] flex flex-col gap-[60px]">
      <CustomStampFront />
      <CustomStampBack />
    </section>
  );
}
