import tw from "twin.macro";
import _ from "lodash";
import { useMemo } from "react";

export const PhotoCard = ({ id }) => {
  const rotated = useMemo(
    () =>
      _.sample([
        tw`rotate-6 hover:rotate-2`,
        tw`rotate-2 hover:rotate-6`,
        tw`-rotate-6 hover:-rotate-2`,
        tw`-rotate-2 hover:-rotate-6`,
      ]),
    []
  );

  return (
    <div
      css={[
        tw`bg-white p-2 pb-4 rounded inline-block mx-2 transform transition cursor-pointer`,
        rotated,
      ]}
    >
      <img
        src={`https://source.unsplash.com/random/100x100/?face,smile&r=${id}&crop=face`}
        width="100"
        tw="rounded"
      />
      <p tw="text-indigo-900">@random</p>
    </div>
  );
};
