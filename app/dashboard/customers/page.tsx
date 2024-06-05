import Pagination from '@/app/ui/invoices/pagination';

import Table from '@/app/ui/customers/table';

import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <Suspense>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}
