import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div>
            LandingPage
            <div>
                <Link href="/sign-in">
                    <Button>Log In</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Register</Button>
                </Link>
            </div>
        </div>
    );
}
