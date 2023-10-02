"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";
import ActionBar from "@/components/ui/ActionBar";


const ManageDepartmentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
    
      <ActionBar title="Department List">
      <Link href="/super_admin/department/create">
        <Button type="primary">Create</Button>
      </Link>

      </ActionBar>
    </div>
  );
};

export default ManageDepartmentPage;
