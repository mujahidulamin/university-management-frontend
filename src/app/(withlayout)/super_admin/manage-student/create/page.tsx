"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo></StudentInfo>,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo></StudentBasicInfo>,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo></GuardianInfo>,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo></LocalGuardianInfo>,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-student`,
            link: `/${role}/manage-student`,
          },
        ]}
      />

      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
