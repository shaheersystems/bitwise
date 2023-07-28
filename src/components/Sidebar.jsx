import {
  CalendarIcon,
  ArrowUturnLeftIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import BitwiseLogo from "../assets/bitwise.svg";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Tasks", href: "#", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Events",
    href: "#",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Backlog",
    href: "#",
    icon: ArrowUturnLeftIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "#",
    icon: Cog6ToothIcon,
  },
];
const projects = [
  {
    id: 1,
    name: "GraphQL API",
    href: "#",
    initial: "G",
    current: false,
  },
  { id: 2, name: "Protocol API", href: "#", initial: "P", current: false },
  {
    id: 3,
    name: "Workcation website",
    href: "#",
    initial: "W",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className='sm:flex hidden w-72 bg-[#f4f4f4] flex-col h-screen gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6'>
      <div className='flex h-16 shrink-0 items-center'>
        <img className='h-8 w-auto' src={BitwiseLogo} alt='Your Company' />
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-secondary"
                        : "text-gray-700 hover:text-secondary",
                      "group flex gap-x-3 text-sm rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-secondary"
                          : "text-gray-400 group-hover:text-secondary",
                        "h-5 w-5 shrink-0 text-sm"
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className='text-xs font-semibold leading-6 text-gray-400'>
              Your projects
            </div>
            <ul role='list' className='-mx-2 mt-2 space-y-1'>
              {projects.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-50 text-secondary"
                        : "text-gray-700 hover:text-secondary",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <span
                      className={classNames(
                        team.current
                          ? "text-secondary border-secondary"
                          : "text-gray-400 bg-gray-200 transition-all group-hover:text-secondary",
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                      )}
                    >
                      {team.initial}
                    </span>
                    <span className='truncate'>{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className='-mx-6 mt-auto'>
            <a
              href='#'
              className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
            >
              <img
                className='h-8 w-8 rounded-full bg-gray-50'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <span className='sr-only'>Your profile</span>
              <div className='flex flex-col'>
                <span aria-hidden='true'>Tom Cook</span>
                <a
                  href='/'
                  className='flex items-center gap-1 text-gray-600 hover:text-gray-800 text-xs font-medium'
                >
                  <svg
                    width='13'
                    height='13'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
                      fill='currentColor'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  @shaheersystems
                </a>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
