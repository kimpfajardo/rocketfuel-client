import Layout from "@components/layouts/Layout";
import PlanPage from "@components/containers/plan";
import Modal from "@components/common/Modal";
import { useState, useMemo } from "react";
import PlanEditMenu from "@helpers/constants/filters/planEditFilters";
import Select from "@components/form/fields/Select";
import Image from "next/image";
import { EDIT } from "@helpers/constants/images/url";

const HeaderContent = (props: any) => {
  const { menu } = props;
  return (
    <div className="flex items-center gap-x-7">
      <Select
        variant="solid"
        placeholder="Edit"
        placeholderOnly
        startAdornment={<Image src={EDIT} width={16} height={16} alt="" />}
        cn={"font-medium text-l-label-reverse"}
        menu={menu}
        menuCn={"right-0"}
        width={"230px"}
        name={"edit-plan-select"}
      />
    </div>
  );
};

const Plan = () => {
  const [modal, setModal] = useState(false);

  const EditMenuList = useMemo(() => {
    const updatedMenu = PlanEditMenu.map((item) => {
      const isEditGoals = item.label === "Goals and budgets";
      const editGoalsClick = isEditGoals ? () => setModal(true) : undefined;
      return {
        ...item,
        clickEvent: editGoalsClick,
      };
    });
    return updatedMenu;
  }, []);

  return (
    <Layout headerContent={<HeaderContent menu={EditMenuList} />}>
      <PlanPage />
      <Modal isVisible={modal} toggleModal={() => setModal((prev) => !prev)} />
    </Layout>
  );
};

export default Plan;
