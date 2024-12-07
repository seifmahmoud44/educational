interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: "sm" | "lg";
}

const UncompletedLesson: React.FC<IconProps> = ({
  className,
  size,
  ...props
}) => (
  <svg
    className={className}
    width={size === "sm" ? "16" : "30"}
    height={size === "sm" ? "16" : "30"}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread any other props passed to the SVG
  >
    <circle
      cx="16"
      cy="16"
      r="15"
      stroke="#0248AB"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeDasharray="6 6"
    />
  </svg>
);
const CompletedLesson: React.FC<IconProps> = ({
  className,
  size,
  ...props
}) => (
  <svg
    className={className}
    width={size === "sm" ? "16" : "30"}
    height={size === "sm" ? "16" : "30"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="10" fill="#0248AB" />
    <path
      d="M8.00002 12.7801L5.68668 10.4667C5.56203 10.3421 5.39297 10.272 5.21668 10.272C5.0404 10.272 4.87133 10.3421 4.74668 10.4667C4.62203 10.5914 4.552 10.7604 4.552 10.9367C4.552 11.024 4.56919 11.1104 4.6026 11.1911C4.636 11.2717 4.68496 11.345 4.74668 11.4067L7.53335 14.1934C7.79335 14.4534 8.21335 14.4534 8.47335 14.1934L15.5267 7.14005C15.6513 7.0154 15.7214 6.84634 15.7214 6.67005C15.7214 6.49377 15.6513 6.3247 15.5267 6.20005C15.402 6.0754 15.233 6.00537 15.0567 6.00537C14.8804 6.00537 14.7113 6.0754 14.5867 6.20005L8.00002 12.7801Z"
      fill="white"
    />
  </svg>
);
const CameraIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width={"26"}
    height={"26"}
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.6875 4.875C4.61006 4.875 3.57675 5.30301 2.81488 6.06488C2.05301 6.82675 1.625 7.86006 1.625 8.9375V17.0625C1.625 18.1399 2.05301 19.1733 2.81488 19.9351C3.57675 20.697 4.61006 21.125 5.6875 21.125H13.8125C14.8899 21.125 15.9233 20.697 16.6851 19.9351C17.447 19.1733 17.875 18.1399 17.875 17.0625V16.8561L21.1819 19.1392C21.4867 19.3496 21.8431 19.4726 22.2128 19.495C22.5824 19.5174 22.9512 19.4383 23.2791 19.2663C23.607 19.0943 23.8817 18.8359 24.0735 18.5191C24.2652 18.2023 24.3666 17.8391 24.3669 17.4688V8.5345C24.3666 8.16418 24.2652 7.80097 24.0735 7.48415C23.8817 7.16732 23.607 6.90894 23.2791 6.73693C22.9512 6.56493 22.5824 6.48585 22.2128 6.50824C21.8431 6.53064 21.4867 6.65366 21.1819 6.864L17.875 9.14713V8.9375C17.875 7.86006 17.447 6.82675 16.6851 6.06488C15.9233 5.30301 14.8899 4.875 13.8125 4.875H5.6875ZM17.875 11.1215L22.1065 8.19975C22.1675 8.15765 22.2389 8.13304 22.3128 8.12859C22.3868 8.12414 22.4606 8.14001 22.5262 8.17449C22.5918 8.20897 22.6468 8.26074 22.6851 8.3242C22.7234 8.38766 22.7436 8.46038 22.7435 8.5345V17.4688C22.7433 17.5427 22.7229 17.6152 22.6844 17.6785C22.646 17.7417 22.5911 17.7932 22.5255 17.8275C22.46 17.8618 22.3863 17.8775 22.3124 17.873C22.2386 17.8685 22.1674 17.8439 22.1065 17.8019L17.875 14.8818V11.1215ZM3.25 8.9375C3.25 8.29103 3.50681 7.67105 3.96393 7.21393C4.42105 6.75681 5.04103 6.5 5.6875 6.5H13.8125C14.459 6.5 15.079 6.75681 15.5361 7.21393C15.9932 7.67105 16.25 8.29103 16.25 8.9375V17.0625C16.25 17.709 15.9932 18.329 15.5361 18.7861C15.079 19.2432 14.459 19.5 13.8125 19.5H5.6875C5.04103 19.5 4.42105 19.2432 3.96393 18.7861C3.50681 18.329 3.25 17.709 3.25 17.0625V8.9375Z"
      fill="#121212"
      fillOpacity="0.8"
    />
  </svg>
);
const AssignmentIcon: React.FC<IconProps> = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5249 11.6187C18.6772 11.7711 18.7628 11.9777 18.7628 12.1932C18.7628 12.4086 18.6772 12.6153 18.5249 12.7676L12.0249 19.2676C11.8725 19.4199 11.6659 19.5055 11.4505 19.5055C11.235 19.5055 11.0284 19.4199 10.876 19.2676L7.62603 16.0176C7.47802 15.8644 7.39613 15.6591 7.39798 15.4461C7.39983 15.2331 7.48528 15.0293 7.63592 14.8786C7.78657 14.728 7.99035 14.6426 8.20339 14.6407C8.41642 14.6388 8.62166 14.7207 8.7749 14.8687L11.4562 17.55L17.3874 11.6187C17.5398 11.4664 17.7464 11.3809 17.9618 11.3809C18.1773 11.3809 18.3839 11.4664 18.5363 11.6187H18.5249Z"
      fill="#121212"
      fillOpacity="0.8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.93751 1.625C8.42789 1.62538 7.93121 1.78549 7.5173 2.0828C7.10339 2.38011 6.79309 2.79968 6.63001 3.2825C5.60788 3.33775 4.89126 3.46613 4.29001 3.77487C3.37493 4.24391 2.6303 4.98854 2.16126 5.90363C1.62988 6.94688 1.62988 8.30863 1.62988 11.0386V18.1886C1.62988 20.9186 1.62988 22.2836 2.16126 23.3236C2.6303 24.2387 3.37493 24.9833 4.29001 25.4524C5.33326 25.9837 6.69501 25.9837 9.42501 25.9837H16.575C19.305 25.9837 20.67 25.9837 21.71 25.4524C22.6264 24.9851 23.3715 24.24 23.8388 23.3236C24.3701 22.2804 24.3701 20.9186 24.3701 18.1886V11.0386C24.3701 8.30863 24.3701 6.94362 23.8388 5.90363C23.3715 4.98723 22.6264 4.2421 21.71 3.77487C21.1055 3.46775 20.3938 3.33775 19.37 3.2825C19.2069 2.79968 18.8966 2.38011 18.4827 2.0828C18.0688 1.78549 17.5721 1.62538 17.0625 1.625H16.627C16.0648 0.65325 15.015 0 13.8158 0H12.1908C10.9883 0 9.93201 0.65325 9.37951 1.625H8.94401H8.93751ZM10.5446 2.84375C10.4733 2.96726 10.3708 3.06983 10.2472 3.14114C10.1237 3.21245 9.98363 3.25 9.84101 3.25H8.93751C8.72202 3.25 8.51536 3.3356 8.36298 3.48798C8.21061 3.64035 8.12501 3.84701 8.12501 4.0625V5.6875C8.12501 5.90299 8.21061 6.10965 8.36298 6.26202C8.51536 6.4144 8.72202 6.5 8.93751 6.5H17.0625C17.278 6.5 17.4847 6.4144 17.637 6.26202C17.7894 6.10965 17.875 5.90299 17.875 5.6875V4.0625C17.875 3.84701 17.7894 3.64035 17.637 3.48798C17.4847 3.3356 17.278 3.25 17.0625 3.25H16.159C16.0164 3.25 15.8763 3.21245 15.7528 3.14114C15.6293 3.06983 15.5267 2.96726 15.4554 2.84375L15.2214 2.4375C15.0788 2.18993 14.8735 1.98432 14.6262 1.84139C14.3788 1.69846 14.0982 1.62326 13.8125 1.62338H12.1875C11.9018 1.62326 11.6212 1.69846 11.3738 1.84139C11.1265 1.98432 10.9212 2.18993 10.7786 2.4375L10.5446 2.84375ZM6.35213 4.94L6.49676 4.92863V5.69238C6.49676 6.33884 6.75356 6.95883 7.21068 7.41595C7.6678 7.87307 8.28779 8.12987 8.93426 8.12987H17.0593C17.7057 8.12987 18.3257 7.87307 18.7828 7.41595C19.24 6.95883 19.4968 6.33884 19.4968 5.69238V4.92863L19.6414 4.94C20.3531 4.9985 20.7188 5.10413 20.9723 5.2325C21.5833 5.5445 22.0805 6.04175 22.3925 6.65275C22.5225 6.90625 22.6281 7.27188 22.685 7.98363C22.7451 8.71488 22.7468 9.65738 22.7468 11.0549V18.2049C22.7468 19.5975 22.7451 20.5449 22.685 21.2761C22.6265 21.9879 22.5209 22.3535 22.3925 22.607C22.0809 23.2185 21.5838 23.7157 20.9723 24.0273C20.7188 24.1573 20.3531 24.2629 19.6414 24.3197C18.9101 24.3799 17.9676 24.3815 16.5701 24.3815H9.42013C8.02751 24.3815 7.08013 24.3799 6.34888 24.3197C5.63713 24.2612 5.27151 24.1556 5.01801 24.0273C4.40651 23.7157 3.90934 23.2185 3.59776 22.607C3.46776 22.3535 3.36213 21.9879 3.30526 21.2761C3.24513 20.5449 3.24351 19.6024 3.24351 18.2049V11.0549C3.24351 9.66225 3.24513 8.71488 3.30526 7.98363C3.36376 7.27188 3.46938 6.90625 3.59776 6.65275C3.90976 6.04175 4.40701 5.5445 5.01801 5.2325C5.27151 5.1025 5.63713 4.99687 6.34888 4.94H6.35213Z"
      fill="#121212"
      fillOpacity="0.8"
    />
  </svg>
);
export { UncompletedLesson, CompletedLesson, CameraIcon, AssignmentIcon };