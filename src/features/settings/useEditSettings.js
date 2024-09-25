import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdated } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => {
      toast.error("Failed to update settings");
    },
  });
  return { updateSetting, isUpdated };
}
