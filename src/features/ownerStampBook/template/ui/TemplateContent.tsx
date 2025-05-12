import CharacterCard from "./CharacterCard";
import StampBack from "./StampBack";
import StampFront from "./StampFront";

export default function TemplateContent() {
  return (
    <div className="flex flex-col gap-9 mt-[25px]">
      <CharacterCard />
      <div className="flex flex-col gap-[50px]">
        <StampFront />
        <StampBack />
      </div>
    </div>
  );
}
