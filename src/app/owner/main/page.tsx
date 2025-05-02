import { Input } from "@/components/ui/input";
import { MoodDropdown, TimeDropdown } from "@/shared/ui/Dropdown";

export default function OwnerMain() {
  return (
    <>
      <Input label="* 지점명" />
      <TimeDropdown />
      <MoodDropdown />
    </>
  );
}
