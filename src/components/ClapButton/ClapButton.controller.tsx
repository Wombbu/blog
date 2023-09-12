"use client";
import { fetchClaps } from "@/model/claps/getClaps";
import { postClaps } from "@/model/claps/postClaps";
import { ClapButton } from "@/components/ClapButton/ClapButton.view";
import { useDebounce } from "@/essentials/utils/useDebounce";
import React, { useState } from "react";

const MAX_CLAPS_PER_SESSION = 20;

export default function ClapButtonController({ slug }: { slug: string }) {
  const localStorageKey = `${slug}.claps`;

  const [previouslySentClapsByUser] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey) || "null") || 0
  );

  const [clapsSentByUser, setClapsSentByUser] = useState(
    previouslySentClapsByUser
  );

  const [userClaps, setUserClaps] = React.useState<number>(
    previouslySentClapsByUser
  );
  const debouncedUserClaps = useDebounce(userClaps, 1000);

  // Post claps
  React.useEffect(() => {
    if (
      debouncedUserClaps - clapsSentByUser > 0 &&
      debouncedUserClaps > previouslySentClapsByUser &&
      debouncedUserClaps <= MAX_CLAPS_PER_SESSION
    ) {
      postClaps(slug, debouncedUserClaps - clapsSentByUser);
      localStorage.setItem(localStorageKey, JSON.stringify(debouncedUserClaps));
      setClapsSentByUser(debouncedUserClaps);
    }
  }, [
    debouncedUserClaps,
    localStorageKey,
    slug,
    previouslySentClapsByUser,
    clapsSentByUser,
  ]);

  const onClap = () => {
    if (userClaps >= MAX_CLAPS_PER_SESSION) {
      return;
    }

    setUserClaps((claps) => claps + 1);
  };

  const getClapsQuery = React.use(
    React.useMemo(() => fetchClaps(slug), [slug])
  );

  return (
    <ClapButton
      totalClaps={
        (getClapsQuery?.claps || 0) + userClaps - previouslySentClapsByUser
      }
      onClap={onClap}
      userClaps={userClaps}
      disabled={userClaps >= MAX_CLAPS_PER_SESSION}
      noClapsSentInThisSession={userClaps === previouslySentClapsByUser}
    />
  );
}
