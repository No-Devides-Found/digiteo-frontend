import React from "react";

// SVGComponent
const RankingCard = ({ title, titleId, desc, descId, data, ...props }) => {
  // data == {
  //   rank: 1,
  //   title: "This is title",
  //   nickname: "author",
  //   likes: 400,
  // };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={477}
      height={709}
      viewBox="0 0 477 709"
      fill="none"
      aria-labelledby={titleId}
      aria-describedby={descId}
      {...props}
    >
      {desc ? <desc id={descId}>{desc}</desc> : null}
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#FBD091"
        d="m57.034 421.736.563-147.968 114.631-93.567-.563 147.968-114.631 93.567ZM302.86 174.563l115.223 92.836 1.505 147.962-115.224-92.836-1.504-147.962Z"
      />
      <g filter="url(#a)">
        <rect width={274} height={453} x={101} y={100} fill="#FFFDE7" rx={30} />
      </g>
      <ellipse cx={238} cy={682.5} fill="url(#b)" rx={142} ry={26.5} />
      <g filter="url(#c)">
        <path
          fill="#1976D2"
          d="m240 621-82.742-23.839 31.605-38.572h102.274l31.605 38.572L240 621Z"
        />
      </g>
      <g filter="url(#d)">
        <path
          fill="#A5D6A7"
          d="M229.648 7.001a13.001 13.001 0 0 1 16.704 0l72.51 60.787c9.303 7.799 3.788 22.962-8.352 22.962H165.49c-12.14 0-17.655-15.163-8.352-22.962L229.648 7Z"
        />
      </g>

      <rect
        width={229}
        height={209}
        x={122}
        y={186}
        fill="url(#e)"
        fillOpacity={0.8}
        rx={20}
      />

      <defs>
        <filter
          id="a"
          width={282}
          height={461}
          x={97}
          y={100}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_343_38"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_343_38"
            result="shape"
          />
        </filter>
        <filter
          id="c"
          width={173.483}
          height={70.411}
          x={153.258}
          y={558.589}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_343_38"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_343_38"
            result="shape"
          />
        </filter>
        <filter
          id="d"
          width={179.072}
          height={94.786}
          x={148.464}
          y={3.964}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_343_38"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_343_38"
            result="shape"
          />
        </filter>
        <linearGradient
          id="b"
          x1={238}
          x2={238}
          y1={656}
          y2={709}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
        </linearGradient>
        <pattern
          id="e"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#f"
            transform="matrix(.00157 0 0 .00152 -.066 -.462)"
          />
        </pattern>
        <image
          xlinkHref={data.thumbnail ? data.thumbnail : "no"}
          id="f"
          width={720}
          height={1280}
          style={{ backgroundColor: "grey" }}
        />
      </defs>

      {/* 아래는 texts */}
      <text x={133} y={160} fill="#000" fontFamily="Krona One" fontSize={40}>
        0{data.rank} _
      </text>
      <text x={168} y={438} fill="#000" fontFamily="Krona One" fontSize={20}>
        {data.title}
      </text>
      <text x={137} y={492} fill="#000" fontFamily="Krona One" fontSize={15}>
        <tspan>{data.nickname}</tspan>
        <tspan x={137} y={516}>
          좋아요 수 {data.likes}
        </tspan>
      </text>
    </svg>
  );
};
export default RankingCard;
