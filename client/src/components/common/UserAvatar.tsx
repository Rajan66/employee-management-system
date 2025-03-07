import Image, { StaticImageData } from "next/image";

interface UserAvatarProps {
  src: string | StaticImageData;
  name: string;
  role?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, name, role }) => {
  return (
    <div className="flex items-center space-x-4">
      <Image 
        src={src} 
        alt={name} 
        width={50} 
        height={50} 
        className="rounded-full w-14 h-14 border-2"
      />
      <div>
        <p className="font-medium">{name}</p>
        {role && <p className="text-gray-500 text-sm">{role}</p>}
      </div>
    </div>
  );
};

export default UserAvatar;
