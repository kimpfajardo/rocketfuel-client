import Image from "next/image";
import Layout from "../../components/layouts/Main";
import Input from "../../components/form/fields/Input";
import SelectInput from "../../components/form/fields/SelectInput";

const filters = [{}];

const Plan = () => {
  return (
    <Layout>
      <div className="py-2 pl-8 flex gap-2">
        <SelectInput
          icon="/images/calendar-date.svg"
          defaultValue="November 2022"
        />
        <SelectInput icon="/images/coins.svg" defaultValue="Efficiency" />
        <SelectInput defaultValue="All types" />
        <SelectInput defaultValue="All sources" />
        <SelectInput defaultValue="4 months" />
      </div>
      <div className="h-full bg-gray flex">
        <div className="h-full w-2/3 border border-l-outline-default">
          {/* <div className="h-[57px] bg-white"></div> */}
          <table className="w-full">
            <thead>
              <tr className="w-full">
                <td className="text-center py-4">Oct</td>
                <td className="text-center py-4">Nov</td>
                <td className="text-center py-4">Dec</td>
                <td className="text-center py-4">Jan</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
              </tr>
              <tr className="border">
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
              </tr>
              <tr className="border">
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
              </tr>
              <tr className="border">
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
              </tr>
              <tr className="border">
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
                <td className="text-center h-[140px]"></td> 
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-full w-1/3 bg-warmGray-400"></div>
      </div>
    </Layout>
  );
};

export default Plan;
