import { BANK_NOTE, STAR, X } from "@helpers/constants/images/url";
import useClickAway from "@hooks/useClickAway";
import Image from "next/image";
import { useRef } from "react";

const Modal = (props: any) => {
  const { isVisible = false, toggleModal } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  useClickAway(modalRef, () => {
    toggleModal();
  });
  if (!isVisible) return <></>;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-l-bg-overlay bg-opacity-80 z-50 flex justify-center items-center">
      <div
        className="w-[507px] grid grid-cols-1 grid-rows-[auto_720px_auto] min-h-min bg-white rounded shadow-md overflow-hidden"
        ref={modalRef}
      >
        <div className="border-b border-l-outline-default">
          <div className="px-6 py-4 pr-4 flex items-center">
            <h2 className="text-xl font-semibold w-full">
              Edit goals and budgets
            </h2>
            <button className="p-3" onClick={toggleModal}>
              <Image src={X} width={16} height={16} alt="Close" />
            </button>
          </div>
          <div className="px-8 flex gap-8">
            <div className="flex gap-2 py-3 border-b-2 border-l-outline-active px-2">
              <Image src={STAR} width={16} height={16} alt="" />
              <p className="font-medium text-l-label-primary">Goals</p>
            </div>
            <div className="flex gap-2 py-3 px-2">
              <Image src={BANK_NOTE} width={16} height={16} alt="" />
              <p>Budgets</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-y-scroll flex flex-col gap-y-6 px-8 py-[22px]">
          <div>
            <p className="mb-2 text-sm font-medium">April Revenue Goal</p>
            <div className="rounded border border-l-outline-default bg-l-bg-secondary px-4 py-2">
              <p className="text-l-label-secondary">$10,000</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">April Revenue Goal</p>
            <div className="rounded border border-l-outline-default bg-l-bg-secondary px-4 py-2">
              <p className="text-l-label-secondary">$10,000</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">April Revenue Goal</p>
            <div className="rounded border border-l-outline-default bg-l-bg-secondary px-4 py-2">
              <p className="text-l-label-secondary">$10,000</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">April Revenue Goal</p>
            <div className="rounded border border-l-outline-default bg-l-bg-secondary px-4 py-2">
              <p className="text-l-label-secondary">$10,000</p>
            </div>
          </div>

          <div className="h-8 w-full sticky bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="border-t border-l-outline-default p-4 flex gap-2 justify-end">
          <button
            className="px-4 py-2 text-l-label-primary rounded text-sm"
            onClick={toggleModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-l-int-default text-l-label-reverse rounded text-sm"
            onClick={toggleModal}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
