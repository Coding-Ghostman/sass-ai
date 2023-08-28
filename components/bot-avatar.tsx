import { Avatar, AvatarImage } from "./ui/avatar";

export default function BotAvatar() {
    return (
        <Avatar>
            <AvatarImage className="p-1" src="/logo.png" />
        </Avatar>
    );
}
