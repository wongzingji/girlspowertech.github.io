import React, { FC, useMemo } from "react";
import "./style.scss";
import Avatar from "@assets/avatars/avatar.png";
import coworkers from "@/components/namecross/workers.json";

type memberProps = {
  name: string
  nameClue?: string
  introduction?: string
  avatarURL?: string
}

const Member: FC<{ name: string }> = ({ name }) => {
  const userDetails = useMemo(() => {
    return getUserDetails(name);
  }, [name])

  function getUserDetails(name: string): memberProps | undefined {
    return coworkers.find((user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase())
  }

  return (
    <div className="member">
      <div className="meta">
        <img className="avatar" src={ userDetails?.avatarURL || Avatar } alt={ name } />
        <p className="name">{ name }</p>
        <div className="intro">
          { userDetails?.introduction ||
            `Blabala  balabala  balabala  babababaaa lalallalala balabala
        balabala balabala
        balabala balabala`}
        </div>
      </div>
    </div>
  );
}

export default Member;