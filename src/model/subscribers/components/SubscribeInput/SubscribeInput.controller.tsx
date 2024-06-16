"use client";
import { ApiError } from "@/model/api";
import { SubscribeInput } from "@/model/subscribers/components/SubscribeInput/SubscribeInput.view";
import { usePostSubscriber } from "@/model/subscribers/endpoints/subscribers_POST";

const getPostSubscriberStatus = ({
  loading,
  error,
  hasData,
}: {
  loading: boolean;
  error: ApiError | undefined;
  hasData: boolean;
}): React.ComponentProps<typeof SubscribeInput>["status"] => {
  if (loading) {
    return "loading";
    ("");
  }

  if (error?.status === 429) {
    return "error_rate_limit";
  }

  if (error?.status === 422) {
    return "already_subscribed";
  }

  if (error) {
    return "error_generic";
  }

  if (hasData) {
    return "success";
  }

  return "idle";
};

type Props = Omit<
  React.ComponentProps<typeof SubscribeInput>,
  "onApply" | "status"
>;

export default function SubscribeInputController(props: Props) {
  const postSubscriber = usePostSubscriber();

  return (
    <SubscribeInput
      onApply={(email) => {
        postSubscriber.trigger({ email });
      }}
      status={getPostSubscriberStatus({
        error: postSubscriber.error,
        hasData: !!postSubscriber.data,
        loading: postSubscriber.isMutating,
      })}
      {...props}
    />
  );
}
