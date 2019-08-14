import React, { useEffect, useState } from 'react';
import { Button } from 'dooboo-native-widgets';
import { NavigationScreenProp } from 'react-navigation';
import SectionList from '../shared/SectionList';
import SettingOption from '../shared/SettingOption';
import StarRating from 'react-native-star-rating';
import SwitchToggle from '../shared/SwitchToggle';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
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
  height: 58px;
  background-color: rgb(64, 127, 255);
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 8px;
  margin-top: 16;
  margin-bottom: 34;
  border-width: 0;
  /* border-color: ${({ theme }) => theme.rosa}; */
`;

interface Props {
  navigation?: NavigationScreenProp<any, any>;
}

function Page(props: Props) {
  const [serviceTitle, setServiceTitle] = useState<string>('');
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
    const sampleTitle = '넷플릭스';
    const sampleFirstDate = '9월 6일';
    const sampleCurrentPricing = '9,500원/월';
    const sampleDueDatePayment = '12월 31일';
    const sampleDaysAlarmBefore = '3일전';

    setServiceTitle(sampleTitle);
    setCurrentPricing(sampleCurrentPricing);
    setFirstDatePayment(sampleFirstDate);
    setDueDatePayment(sampleDueDatePayment);
    setDaysAlarmBefore(sampleDaysAlarmBefore);
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
        testID='BTN_REGISTER'
        onClick={() => {
        }}
        textStyle={{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
          letterSpacing: -0.45,
        }}
        text={getString('SERVICE_DETAIL_REGISTER')}

      />
    </Container>
  );
}

export default Page;
