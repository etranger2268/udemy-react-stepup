'use server';

export type State = {
  error?: string;
  success: boolean;
};

export const authAction = async (_prevState: State, formData: FormData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userId = formData.get('userId') as string;

    if (!userId) {
      return { error: 'ユーザーIDを入力してください', success: false };
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) {
      return { error: 'ユーザーが見つかりませんでした', success: false };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error(err);

    return {
      error: err instanceof Error ? err.message : '予期せぬエラーが発生しました',
      success: false,
    };
  }
};
