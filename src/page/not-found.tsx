import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="boxWidth boxMar py-3 h-fit flex flex-col justify-center items-center space-y-6 text-center">
      <div>
        <img src="/assets/404.svg" alt="error-image" className="w-full" />
      </div>
      <h2 className="heading2 font-semibold">Event not found</h2>
      <p>
        We couldn’t find any event with this url. Please confirm it is correct
        and try again.
      </p>
      <Button className=" text-white" asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
