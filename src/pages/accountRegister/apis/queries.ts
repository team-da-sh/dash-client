import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getBankList } from '@/pages/accountRegister/apis/axios';
import type { BankListResponseTypes } from '@/pages/accountRegister/types/api';
import { bankKeys } from '@/shared/constants/queryKey';

export const useGetBankList = () => {
  return useQuery<BankListResponseTypes, AxiosError>({
    queryKey: bankKeys.all,
    queryFn: () => getBankList(),
  });
};
