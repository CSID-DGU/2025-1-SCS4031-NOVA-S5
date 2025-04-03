import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-2">
      <Button className="bg-green-50 text-gray-800">
        300
      </Button>
      <Button className="bg-yellow-400 text-gray-900">
        500
      </Button>
    </div>
  );
}
