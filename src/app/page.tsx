import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-2">
      <Button className="bg-green-500 text-title-medium-b">
        300버튼
      </Button>
      <Button className="bg-yellow-400 text-gray-900">
        500
      </Button>
    </div>
  );
}
