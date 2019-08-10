import React, { useEffect, useState } from 'react';
import { Button } from 'dooboo-native-widgets';
import { NavigationScreenProp } from 'react-navigation';
import SectionList from '../shared/SectionList';
import SettingOption from '../shared/SettingOption';
import StarRating from 'react-native-star-rating';
import SwitchToggle from '../shared/SwitchToggle';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const HighlightedText = styled.Text`
  font-size: 16;
  color: rgb(64, 127, 255);
  letter-spacing: -0.45;
  margin-right: 24px; 
`;

const UnHighlightedText = styled.Text`
  font-size: 16;
  color: rgb(164, 165, 166);
  letter-spacing: -0.45;
  margin-right: 24px; 
`;

const RegisterButton = styled(Button)`
  height: 48px;
  font-size: 16;
  background-color: rgb(64, 127, 255);
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 8px;
  margin-top: 16;
  margin-bottom: 34;
  border-width: 0;
  /* border-color: ${({ theme }) => theme.rosa}; */
`;

interface IProps {
  navigation?: NavigationScreenProp<any, any>;
}

function Page(props: IProps) {
  const [currentPricing, setCurrentPricing] = useState<string>('');
  const [firstDatePayment, setFirstDatePayment] = useState<string>('');
  const [dueDatePayment, setDueDatePayment] = useState<string>('');
  const [daysAlarmBefore, setDaysAlarmBefore] = useState<string>('');
  const [serviceRate, setServiceRate] = useState<number>(0);

  const handleSwitchToggleAdditionalPricing = (switchOn: boolean) => {
  };

  const handleStarRatingServiceRate = (rating: number) => {
    setServiceRate(rating);
  };

  useEffect(() => {
    const sampleCurrentPricing = '9,500원/월';

    setCurrentPricing(sampleCurrentPricing);
    setFirstDatePayment('9월 6일');
    setDueDatePayment('12월 31일');
    setDaysAlarmBefore('3일전');
    setServiceRate(5);
  }, []);

  return (
    <Container>
      <SectionList
        renderItem={({ item, index }) => {
          const { label, option } = item;
          return (
            <SettingOption
              key={index}
              label={label}
            >
              {option}
            </SettingOption>
          );
        }}

        sections={[{
          // title: `${getString('SETTING_ACCOUNT')}`,
          data: [{
            label: `${getString('SERVICE_DETAIL_SELECTED_PRICING')}`,
            option: (
              <HighlightedText>{currentPricing}</HighlightedText>
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_UNSELECTED_PRICING')}`,
            option: (
              <UnHighlightedText>{currentPricing}</UnHighlightedText>
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_ADDITIONAL_PRICING')}`,
            option: (
              <SwitchToggle
                onPress={handleSwitchToggleAdditionalPricing}
                testID='switchToggleAdditionalPricing'
              />
            ),
          }],
        },
        {
          title: `${getString('SERVICE_DETAIL_SECTION_PAYMENT')}`,
          data: [{
            label: `${getString('SERVICE_DETAIL_PAYMENT_PROMOTION')}`,
            option: (
              <SwitchToggle
                onPress={handleSwitchToggleAdditionalPricing}
                testID='switchToggleAdditionalPricing'
              />
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_PAYMENT_FIRST_DATE')}`,
            option: (
              <UnHighlightedText>{firstDatePayment}</UnHighlightedText>
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_PAYMENT_DUE_DATE')}`,
            option: (
              <UnHighlightedText>{dueDatePayment}</UnHighlightedText>
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_PAYMENT_ALRAM_BEFORE')}`,
            option: (
              <UnHighlightedText>{daysAlarmBefore}</UnHighlightedText>
            ),
          },
          {
            label: `${getString('SERVICE_DETAIL_SERVICE_RATE')}`,
            option: (
              <StarRating
                containerStyle={{ marginRight: 20 }}
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                starSize={24}
                starStyle={{ padding: 2.3 }}
                rating={serviceRate}
                selectedStar={(rating) => handleStarRatingServiceRate(rating)}
                fullStarColor={'rgb(64, 127, 255)'}
              />
            ),
          },
          ],
        }]}
      />

      <RegisterButton
        testId='BTN_REGISTER'
        onClick={() => {
        }}
        textStyle={{ color: 'white', font: 16 }}
        text={getString('SERVICE_DETAIL_REGISTER')}

      />
    </Container>
  );
}

export default Page;
