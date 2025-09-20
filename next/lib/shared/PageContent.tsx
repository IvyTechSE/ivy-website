import DynamicZoneManager from '@/components/dynamic-zone/manager';

export default function PageContent({ pageData }: { pageData: any }) {
  const dynamicZone = pageData?.dynamic_zone;
  return (
    <div className="relative overflow-hidden w-full">
      {dynamicZone && (
        <DynamicZoneManager
          dynamicZone={dynamicZone}
          locale={pageData.locale}
        />
      )}
    </div>
  );
}
