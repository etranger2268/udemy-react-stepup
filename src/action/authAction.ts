'use server';

import type { User2 } from '@/types/user2';

export type State = {
  error?: string;
  success: boolean;
  data: User2 | null;
};

export const authAction = async (_prevState: State, formData: FormData): Promise<State> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userId = formData.get('userId') as string;

    if (!userId) {
      return { data: null, error: 'ユーザーIDを入力してください', success: false };
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
      return { data: null, error: 'ユーザーが見つかりませんでした', success: false };
    }

    const data = (await res.json()) as User2;

    return { success: true, data };
  } catch (err: unknown) {
    console.error(err);

    return {
      data: null,
      error: err instanceof Error ? err.message : '予期せぬエラーが発生しました',
      success: false,
    };
  }
};
